import { createContext, use } from "react";
export const AppContext= createContext()
import { assets, dummyCourses } from "../assets/assets";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import humanizeDuration from 'humanize-duration'
export const AppContextProvider=(props)=>{
    const currency=import.meta.env.VITE_CURRENCY;
    const navigate=useNavigate();
    const [allCourses,setAllCourses]=useState([]);
    const [isEducator,setIsEducator]=useState(true);

    const fetchAllCourses=async()=>{
        setAllCourses(dummyCourses);
    }
    //Function to calculate  rating
    const calculateRating=(course)=>{
        if(course.courseRatings.length===0){
            return 0;
        }
       let totalRating =0;
         course.courseRatings.forEach((rating)=>{
                totalRating+=rating.rating;
          })
          return totalRating/course.courseRatings.length;
    }

    //Function to calculate Course chapter time
    const calculateChapterTime=(chapter)=>{
        let time=0
        chapter.chapterContent.map((lecture)=>time+=lecture.lectureDuration)
        return humanizeDuration(time*60*1000,{units:["h","m"]})
    }

    // function to calculate Course Duration
    const calculateCourseDuration=(course)=>{
        let time =0

        course.courseContent.map((chapter)=>chapter.chapterContent.map((lecture)=>time+=lecture.lectureDuration))
        return humanizeDuration(time*60*1000,{units:["h","m"]})
    }

    // function to calculate number of lectures in the course
    const calculateNoOfLectures=(course)=>{
        let totalLectures =0;
        course.courseContent.forEach(chapter=>{
            if(Array.isArray(chapter.chapterContent)){
                totalLecture +=chapter.chapterContent.length
            }
        });
        return totalLectures;
    }
    useEffect(()=>{
        fetchAllCourses();
    },[])
    const value={
        currency,allCourses,navigate,calculateRating,isEducator,setIsEducator,calculateNoOfLectures,calculateCourseDuration,calculateChapterTime
    }
    return (
        <AppContext.Provider value={value}>
            {
                props.children
            }
        </AppContext.Provider>
    )
}