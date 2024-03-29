import { useState } from "react";

import Button from "@/components/Button";

const Quotes = () => {
    const quotes = [
        {
            person: "Elizabeth Andrew",
            quote: "Volunteers do not necessarily have the time; they just have the heart.",
        },
        {
            person: "Erma Bombeck",
            quote: "Volunteers are the only human beings on the face of the earth who reflect this nation’s compassion, unselfish caring, patience, and just plain loving one another.",
        },
        {
            person: "Winston Churchill",
            quote: "You make a living by what you get. You make a life by what you give.",
        },
        {
            person: "Oscar Wilde",
            quote: "The smallest act of kindness is worth more than the grandest intention.",
        },
        {
            person: "Audrey Hepburn",
            quote: "As you grow older, you will discover that you have two hands — one for helping yourself, the other for helping others.",
        },
        {
            person: "Gandhi",
            quote: "The best way to find yourself is to lose yourself in the service of others.",
        },
        {
            person: "Margaret Mead",
            quote: "Never doubt that a small group of thoughtful, committed citizens can change the world; indeed, it’s the only thing that ever has.",
        },
        {
            person: "Helen Keller",
            quote: "Alone we can do so little; together we can do so much.",
        },
        {
            person: "Martin Luther King",
            quote: "Life’s most persistent and urgent question is, what are you doing for others?",
        },
        {
            person: "Muhammad Ali",
            quote: "Service to others is the rent you pay for your room here on earth.",
        },
        {
            person: "Muhammad Ali",
            quote: "Every person can make a difference, and every person should try.",
        },
        {
            person: "Arthur Ashe",
            quote: "Start where you are. Use what you have. Do what you can.",
        },
        {
            person: "Bernard Meltzer",
            quote: "There is no better exercise for your heart than reaching down and helping to lift someone up.",
        },
        {
            person: "Aristotle",
            quote: "What is the essence of life? To serve others and to do good.",
        },
        {
            person: "Helen Dyer",
            quote: "Volunteerism is the voice of the people put into action. These actions shape and mold the present into a future of which we can all be proud.",
        },
        {
            person: "Leo Buscaglia",
            quote: "Too often we underestimate the power of a touch, a smile, a kind word, a listening ear, an honest compliment, or the smallest act of caring, all of which have the potential to turn a life around.",
        },
        {
            person: "Kofi Annan",
            quote: "If our hopes of building a better and safer world are to become more than wishful thinking, we will need the engagement of volunteers more than ever.",
        },
        {
            person: "Natalie Portman",
            quote: "Our generation has the ability and the responsibility to make our ever-more connected world a more hopeful, stable and peaceful place.",
        },
        {
            person: "Heather French Henry",
            quote: "Volunteering is at the very core of being a human. No one has made it through life without someone else’s help.",
        },
        {
            person: "Plato",
            quote: "Good actions give strength to ourselves and inspire good actions in others.",
        },
    ];

    const [quote, setQuote] = useState(quotes[7]);

    function getQuote() {
        const random = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[random]);
    }

    return (
        <div className='flex h-96 items-center justify-center bg-gradient-to-t from-primary-200 to-secondary-300'>
            <div className='mx-7 flex flex-col items-center justify-center py-5 text-center font-bold text-white'>
                <div className='flex flex-col items-center sm:w-3/4'>
                    <p className='mb-3 text-base italic sm:text-3xl'>
                        &quot;{quote.quote}&quot;
                    </p>
                    <hr className='my-2 w-3/4' />
                    <h2 className='mb-5 text-sm sm:text-2xl'>{quote.person}</h2>
                </div>

                <div>
                    <Button
                        type='button'
                        label='Get Inspired'
                        onClick={() => getQuote()}
                    />
                </div>
            </div>
        </div>
    );
};

export default Quotes;
