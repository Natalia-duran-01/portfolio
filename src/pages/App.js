import React, { useEffect, useState } from 'react'
import { HomeScreen } from './HomeScreen'
import { LoadingScreen } from './LoadingScreen';
import { GlobalStyle } from '../styles/GlobalStyles';
import { LanguajeProvider } from '../providers/LanguajeProvider';
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import MyScrollReveal from '../components/MyScrollReveal';

const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 4300);
        console.log('Que haces viendo la consola mi amor? 🤨🤨🤨')
    }, [])




    return (

        <LanguajeProvider>
            <GlobalStyle />
            {isLoading ? <LoadingScreen /> : <HomeScreen />}



        </LanguajeProvider>




    )
}

export default App