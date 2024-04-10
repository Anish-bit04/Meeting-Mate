"use client"

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Briefcase } from "lucide-react";
import { Clock } from "lucide-react";
import { Calendar } from "lucide-react";
import { Settings } from "lucide-react";
import Link from "next/link";
import {usePathname} from "next/navigation";

const SideNavBar = () => {
  const menu = [
    {
      id: 1,
      name: "Meeting Type",
      path: "/dashboard/meeting-type",
      icon: Briefcase,
    },
    {
      id: 2,
      name: "Scheduled Meeting",
      path: "/dashboard/scheduled-meeting",
      icon: Calendar,
    },
    {
      id: 3,
      name: "Availability",
      path: "/dashboard/availability",
      icon: Clock,
    },
    {
      id: 4,
      name: "Settings",
      path: "/dashboard/settings",
      icon: Settings,
    },
  ];

  const path=usePathname();

  const [activePath,setActivePath]=useState(path);

  useEffect(()=>{
    setActivePath(path)
  },[path])

  return (
    <div className="p-5  py-14 flex flex-col items-center ">
      <div className="flex justify-center items-center">
        <Image src="/logo.svg" height={90} width={90} alt="logo" />
      </div>
      
       <Link href={"/create-meeting"}> <Button className="flex gap-2 w-full mt-7 rounded-full">
          <Plus />Create
        </Button> </Link> 

        <div className="mt-5 flex flex-col gap-5">
          {menu.map((item, index) => (
            <Link  key={item.id} href={item.path}>
              <Button
               
                className={`w-full flex gap-2 justify-start hover:bg-blue-100 ${activePath==item.path && "text-primary bg-blue-100"}`}
                variant="ghost"
              >
                <item.icon /> {item.name}
              </Button>
            </Link>
          ))}
        </div>
      </div>
   
  );
};

export default SideNavBar;
