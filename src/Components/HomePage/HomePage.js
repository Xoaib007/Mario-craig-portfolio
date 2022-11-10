import React from 'react';
import CustomProgram from '../CustomProgram/CustomProgram';
import MyMission from '../MyMission/MyMission';
import Introduction from './Introduction/Introduction';
import Services from './Services/Services';

const HomePage = () => {
    window.title = "Home";
    return (
        <div>
            <Introduction></Introduction>
            <MyMission></MyMission>
            <Services></Services>
            <CustomProgram></CustomProgram>
        </div>
    );
};

export default HomePage;