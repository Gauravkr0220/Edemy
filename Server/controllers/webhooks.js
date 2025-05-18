import { Webhook } from "svix";
import User from "../models/User.js";
import connectDB from "../configs/mongodb.js";

export const clerkWebhooks = async (req, res) => {
  console.log("hello");
  try {
    await connectDB(); // Ensure DB is connected in serverless

    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    const payload = JSON.stringify(req.body);
    await whook.verify(payload, {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"]
    });

    const { data, type } = req.body;

    switch (type) {
      case "user.created": {
        const userData = {
          _id: data.id,
          email: data.email_addresses[0].email_address,
          name: `${data.first_name} ${data.last_name}`,
          imageUrl: data.image_url,
          resume: ''
        };
        await User.create(userData);
        console.log("✅ User created:", userData);
        return res.status(200).json({});
      }

      case "user.updated": {
        const userData = {
          email: data.email_addresses[0].email_address,
          name: `${data.first_name} ${data.last_name}`,
          imageUrl: data.image_url,
        };
        await User.findByIdAndUpdate(data.id, userData);
        console.log("✅ User updated:", userData);
        return res.status(200).json({});
      }

      case "user.deleted": {
        await User.findByIdAndDelete(data.id);
        console.log("🗑️ User deleted:", data.id);
        return res.status(200).json({});
      }

      default:
        console.log("ℹ️ Unhandled event type:", type);
        return res.status(200).json({});
    }

  } catch (error) {
    console.error("❌ Webhook error:", error.message);
    return res.status(500).json({ success: false, message: error.message });
  }
};
