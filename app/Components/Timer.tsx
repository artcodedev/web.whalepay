
/*
*** STYLE
*/
import style from '@/app/Styles/Components/Timer.module.scss';
import { useEffect, useState } from 'react';

const Timer = ({timer}:{timer: number}): JSX.Element => {

    const [minutes, setMinutes] = useState<number>(0);
    const [seconds, setSeconds] = useState<number>(0);
    const minute: number = 60000;

    useEffect(() => {

        let timer_id: Timer = setInterval(() => {

            const create_at: number = Date.parse(new Date().toLocaleString("en-US", {timeZone: "Europe/Moscow"}));
            const timestamp: number = timer - create_at;
            const tim: boolean = create_at < timer;

            setMinutes(tim ? Math.floor(timestamp / minute) : 0);
            setSeconds(tim ? Number(((timestamp % minute) / 1000).toFixed(0)) : 0)

        }, 1000);

        return () => clearInterval(timer_id);
        
    }, []);


    return (
        <>

            <div className={style['Timer']}>
                <div className={style['Timer__wrapp']}>

                    <div className={style['Timer__wrapp__timer']}>

                        {minutes < 10 && '0'}{minutes}:{seconds < 10 && '0'}{seconds}

                    </div>

                    <div className={style['Timer__wrapp__title']}>
                        Время на оплату
                    </div>

                </div>
            </div>

        </>
    )
}

export default Timer;