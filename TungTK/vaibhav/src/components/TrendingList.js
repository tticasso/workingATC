import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListFilm from './ListFilm';
import ListDay from './ListDay';
import ListWeek from './ListWeek';
import React from 'react';
import ListMonth from './ListMonth';

export default function TrendingList() {
    const [selectedTabIndex, setSelectedTabIndex] = useState(0);

    const CustomTabList = ({ children }) => (
        <TabList className='border-none relative left-[915px] w-[300px] rounded-[20px] bg-white p-[0px] flex justify-center items-center'>
            {React.Children.map(children, (child, index) => (
                React.cloneElement(child, {
                    style: {
                        textDecoration: 'none',
                        height: '100%',
                        border: 'none',
                        width: '100px',
                        bottom: '0',
                        borderRadius: '20px',
                        textAlign: 'center',
                        background: index === selectedTabIndex ? 'linear-gradient(98.37deg, #001df8 .99%, #06c5ff 100%)' : 'initial',
                        color: index === selectedTabIndex ? 'white' : 'black',
                    },
                    onClick: () => setSelectedTabIndex(index),
                })
            ))}
        </TabList>
    );

    return (
        <div className="w-full h-[456px] flex justify-center mt-[0px] bg-black">
            <div className="w-[1216px] h-[456px]">
                <p className="text-[16px] font-normal text-[#02ff28] relative top-[25px]">Trending Movie's & TV Shows</p>
                <Tabs selectedIndex={selectedTabIndex} onSelect={index => setSelectedTabIndex(index)}>
                    <CustomTabList>
                        <Tab>Day</Tab>
                        <Tab>Week</Tab>
                        <Tab>Months</Tab>
                    </CustomTabList>

                    <TabPanel>
                        <div className='w-full flex justify-center'>
                            <div className='w-[1216px]'>
                                <ListDay />
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='w-full flex justify-center'>
                            <div className='w-[1216px]'>
                                <ListWeek />
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className='w-full flex justify-center'>
                            <div className='w-[1216px]'>
                                <ListMonth />
                            </div>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
}
