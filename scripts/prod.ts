import "dotenv/config";
import {neon} from "@neondatabase/serverless";
import {drizzle} from "drizzle-orm/neon-http";
import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);
//@ts-ignore
const db = drizzle(sql, {schema});

const main = async () => {
    try {
        console.log('seeding database');

        await db.delete(schema.courses);
        await db.delete(schema.userProgress);
        await db.delete(schema.units);
        await db.delete(schema.lessons);
        await db.delete(schema.challenges);
        await db.delete(schema.challengeOptions);
        await db.delete(schema.challengeProgress);
        await db.delete(schema.userSubscription);

        await db.insert(schema.courses).values([
            {
                id: 1,
                title: "Spanish",
                imageSrc: "/spain.jpg",
            },
            {
                id: 2,
                title: "French",
                imageSrc: "/france.flag.jpg",
            },
            {
                id: 3,
                title: "English",
                imageSrc: "/en.flag.jpg",
            },
            {
                id: 4,
                title: "Japanese",
                imageSrc: "/japan.flag.jpg",
            },
        ])

        await db.insert(schema.units).values([
            {
                id: 1,
                courseId: 1,
                title: "Unit 1",
                description: "Learn the basics of Spanish",
                order: 1,
            }
        ])

        await db.insert(schema.lessons).values([
            {
                id: 1,
                unitId: 1,
                order: 1,
                title: "Nouns"
            },
            {
                id: 2,
                unitId: 1,
                order: 2,
                title: "Verbs"
            },
            {
                id: 3,
                unitId: 1,
                order: 3,
                title: "Nouns"
            },
            {
                id: 4,
                unitId: 1,
                order: 4,
                title: "Verbs"
            },
            {
                id: 5,
                unitId: 1,
                order: 5,
                title: "Nouns"
            },
            {
                id: 6,
                unitId: 1,
                order: 6,
                title: "Verbs"
            },
        ])

        await db.insert(schema.challenges).values([
            {
                id: 1,
                lessonId: 1, //nouns
                type: "SELECT",
                order: 1,
                question: 'Which one of these is the "the man"?'
            },
            {
                id: 2,
                lessonId: 1,
                type: "ASSIST",
                order: 2,
                question: '"the man"?',
            },
            {
                id: 3,
                lessonId: 1,
                type: "SELECT",
                order: 3,
                question: 'Which one of these is "the robot"?',
            }
        ]);

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 1, //which one of these is "the man"?
                imageSrc: "/man.jpg",
                correct: true,
                text: "el hombre",
                audioSrc: "/es_man.mp3",
            },
            {
                challengeId: 1,
                imageSrc: "/woman.jpg",
                correct: false,
                text: "la mujer",
                audioSrc: "/es_woman.mp3",
            },
            {
                challengeId: 1,
                imageSrc: "/robot.jpg",
                correct: false,
                text: "el robot",
                audioSrc: "/es_robot.mp3"
            }
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 2, //which one of these is "the man"?
                imageSrc: "/man.jpg",
                correct: true,
                text: "el hombre",
                audioSrc: "/es_man.mp3",
            },
            {
                challengeId: 2,
                imageSrc: "/woman.jpg",
                correct: false,
                text: "la mujer",
                audioSrc: "/es_woman.mp3",
            },
            {

                challengeId: 2,
                imageSrc: "/robot.jpg",
                correct: false,
                text: "el robot",
                audioSrc: "/es_robot.mp3"
            }
        ])

        await db.insert(schema.challengeOptions).values([
            {

                challengeId: 3, //which one of these is "the man"?
                imageSrc: "/man.jpg",
                correct: false,
                text: "el hombre",
                audioSrc: "/es_man.mp3",
            },
            {

                challengeId: 3,
                imageSrc: "/woman.jpg",
                correct: false,
                text: "la mujer",
                audioSrc: "/es_woman.mp3",
            },
            {

                challengeId: 3,
                imageSrc: "/robot.jpg",
                correct: true,
                text: "el robot",
                audioSrc: "/es_robot.mp3"
            }
        ])

        await db.insert(schema.challenges).values([
            {
                id:4,
                lessonId: 2,
                type:"SELECT",
                order:1,
                question:'Which one of these is the "the man"?'
            },
            {
                id:5,
                lessonId: 2,
                type:"ASSIST",
                order:2,
                question: '"the man"',
            },
            {
                id:6,
                lessonId: 2,
                type:"SELECT",
                order:3,
                question:'Which one of these is the "the robot"?',
            },
        ])

        console.log("seeding finishing");
    } catch (error) {
        console.error(error);
        throw new Error("Failed to seed the database");
    }
}

main();