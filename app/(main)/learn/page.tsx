import React from 'react';
import StickyWrapper from "@/components/ui/stickyWrapper";
import FeedWrapper from "@/components/ui/feed-wrapper";
import Header from "@/app/(main)/learn/header";
import UserProgress from "@/components/ui/user-progress";
import {Unit} from "@/app/(main)/learn/unit";
import {getCourseProgress, getLessonPercentage, getUnits, getUserProgress, getUserSubscription} from "@/db/queries";
import {redirect} from "next/navigation";
import {lessons, units as unitsSchema, userSubscription} from "@/db/schema";
import Promo from "@/components/ui/promo";
import Quests from "@/components/ui/quests";

const LearnPage = async () => {
    const unitsData = getUnits();
    const userSubscriptionData = getUserSubscription();

    const courseProgressData = getCourseProgress();
    const userProgressData = getUserProgress();
    const lessonPercentageData = getLessonPercentage();
    const [userProgress, units, courseProgress, lessonPercentage,useSubscription] = await Promise.all([userProgressData, unitsData, courseProgressData, lessonPercentageData,userSubscriptionData]);

    if (!userProgress || !userProgress.activeCourse) {
        redirect("/courses");
    }
    if (!courseProgress) {
        redirect("/courses");
    }
    const isPro=!!useSubscription?.isActive;

    return (
        <div className={"flex flex-row-reverse gap-[48px] px-6"}>

            <StickyWrapper>
                <UserProgress
                    activeCourse={userProgress.activeCourse}
                    hearts={userProgress.hearts}
                    points={userProgress.points}
                    hasActiveSubscription={isPro}
                />
                {!isPro&&(
                    <Promo/>
                )}
                <Quests points={userProgress.points}/>
            </StickyWrapper>
            <FeedWrapper>
                <Header title={userProgress.activeCourse.title}/>
                {units.map((unit) => (
                    <div key={unit.id} className="mb-10">
                        <Unit id={unit.id} order={unit.order} description={unit.description} title={unit.title}
                              lessons={unit.lessons}
                              activeLesson={courseProgress.activeLesson as typeof lessons.$inferSelect & {
                                  unit: typeof unitsSchema.$inferSelect;
                              } | undefined}
                              activeLessonPercentage={lessonPercentage}/>
                    </div>
                ))}
            </FeedWrapper>
        </div>
    );
};

export default LearnPage;