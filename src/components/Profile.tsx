import React from "react";
import { GraduationCap, House } from "lucide-react";
const Profile: React.FC = () => {
  return (
    <div className="flex flex-row">
      <div className="w-64 h-64 rounded-full overflow-hidden flex-shrink-0">
        <img
          src={"/about-images/profile-picture.webp"}
          className="w-full h-full object-cover"
          alt="Zidane Ho"
          loading="eager"
          fetchPriority="high"
        />
      </div>
      <div className="flex flex-col pl-4 animate-fade-in-slide [animation-delay:50ms]">
        <p className="font-extrabold text-4xl">Zidane Ho</p>
        <p className="text-sm font-medium">Games Programmer</p>
        <div className="flex flex-row items-center mt-1 gap-2">
          <GraduationCap className="w-6 h-6"></GraduationCap>
          <p className="text-sm">B.S of Computer Science at UC San Diego</p>
        </div>
        <div className="flex flex-row items-center mt-1 gap-2">
          <House className="w-6 h-6"></House>
          <p className="text-sm">Saratoga, CA</p>
        </div>
      </div>
    </div>
  );
};
export default Profile;
