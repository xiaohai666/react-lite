import { useEffect } from 'react';
import { api } from '../../api/request'











console.log();

function About() {
    useEffect(() => {
        api({
            url: '/demo',
            method: 'get'
        }).then(res => {
            console.log(res);

        })
        api({
            url: '/demo1',
            method: 'get'
        }).then(res => {
            console.log(res);

        })
    }, [])
    return (<div>here is About</div>);
}

export default About;
