import React, { useEffect, useState } from 'react'

const usePageProgress = () => {
    const [completion, setCompletion] = useState(0);

    var r = document.querySelector(':root');
    var rs = getComputedStyle(r);
    //console.log(rs.getPropertyValue('--primary'))

    useEffect(() => {
        const updateScrollCompletion = () => {
            const scrollProgress = window.scrollY;
            const scrollHeight = document.body.scrollHeight - window.innerHeight;

            if (scrollHeight) { 
                setCompletion(
                    Number((scrollProgress / scrollHeight).toFixed(2)) * 100
                )
            }


            var green = 40 + ((140 / 100) * (Number((scrollProgress / scrollHeight).toFixed(2)) * 100));
            var changeColor = 'rgba(226, ' + green + ', 60, 1)';
            r.style.setProperty('--primary', changeColor);
            console.log(green);
        }
        window.addEventListener('scroll', updateScrollCompletion)

        return () => {
            window.removeEventListener('scroll', updateScrollCompletion)
        }
    }, []);
    return completion;
}

export default usePageProgress