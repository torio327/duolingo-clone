"use client";
import simpleRestProvider from "ra-data-simple-rest"
import React from 'react';
import {Admin, Resource} from "react-admin";
import {CourseList} from "@/app/admin/course/list";
import {CourseCreate} from "@/app/admin/course/courseCreate";
import {UnitList} from "@/app/admin/unit/list";
import {UnitCreate} from "@/app/admin/unit/courseCreate";
import { UnitEdit} from "@/app/admin/unit/edit";
import {CourseEdit} from "@/app/admin/course/edit";
import {LessonEdit} from "@/app/admin/lesson/edit";
import {LessonList} from "@/app/admin/lesson/list";
import {LessonCreate} from "@/app/admin/lesson/courseCreate";
import {ChallengeList} from "@/app/admin/challenge/list";
import {ChallengeEdit} from "@/app/admin/challenge/edit";
import {ChallengeCreate} from "@/app/admin/challenge/courseCreate";
import {ChallengeOptionCreate} from "@/app/admin/challengeOption/courseCreate";
import {ChallengeOptionList} from "@/app/admin/challengeOption/list";
import {ChallengeOptionEdit} from "@/app/admin/challengeOption/edit";

const dataProvider=simpleRestProvider("/api");

const App = () => {
    return (
        <>
         <Admin dataProvider={dataProvider}>
             <Resource name={"courses"} list={CourseList} edit={CourseEdit} recordRepresentation={"title"} create={CourseCreate}/>
             <Resource name={"units"} list={UnitList} edit={UnitEdit} recordRepresentation={"title"} create={UnitCreate}/>
             <Resource name={"lessons"} list={LessonList} edit={LessonEdit} recordRepresentation={"title"} create={LessonCreate}/>
             <Resource name={"challenges"} list={ChallengeList} edit={ChallengeEdit} recordRepresentation={"question"} create={ChallengeCreate}/>
             <Resource name={"challengeOptions"} list={ChallengeOptionList} edit={ChallengeOptionEdit} recordRepresentation={"text"} create={ChallengeOptionCreate} options={{label:"Challenge Options"}}/>
         </Admin>
        </>
    );
};

export default App;