const About = () => {
    return (
        <div className="flex flex-col">
            <div className="font-bold text-xl">About</div>
            <div>
                <div className="flex flex-row gap-5 mt-5">
                    <div className="basis-2/3">
                        <p>
                            I'm a passionate weeb on a relentless quest (<a href="https://www.imdb.com/title/tt21209876/" className="text-sky-600">Solo Leveling</a> Vibes) to level up each day, constantly battling my lazy tendencies. I have an insatiable drive to write code that's both elegant and minimalistic. Currently working as a Full Stack Dev at Zoho and Exploring new programming languages and concepts and getting stressed while trying them is my all time job.
                        </p> <br/>
                        <p>Years of Experience : {YOE()}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

function YOE(): string {
    const currDate = new Date();
    const joinedDate = new Date("January 9, 2023 00:00:00");
    var timeDiff = currDate.getTime() - joinedDate.getTime();
    timeDiff /= 60 * 60 * 1000 * 24 * 365;
    return Math.abs(timeDiff).toFixed(1);
}

export default About;

