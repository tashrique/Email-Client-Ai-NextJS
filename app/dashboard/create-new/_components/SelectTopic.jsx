"use client";
import React, { useState } from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"



const SelectTopic = ({ onUserSelect }) => {

    const options = ['Custom Prompt', 'Random AI Story', 'Scary Story', 'Fun Facts', 'Children Story', 'Motivational Story']
    const [selectedOption, setSelectedOption] = useState('')



    return (
        <div>
            <h2 className='font-bold text-primary text-xl'>Content</h2>
            <p className='text-gray-500'>What is the topic of your video?</p>

            <Select onValueChange={(value) => {
                setSelectedOption(value)
                value != 'Custom Prompt' && onUserSelect('topic', value)
            }}>
                <SelectTrigger className="w-full mt-2 p-6 text-lg">
                    <SelectValue placeholder="Content Type" />
                </SelectTrigger>
                <SelectContent>
                    {options.map((option, index) => (
                        <SelectItem key={index} value={option} className='text-lg cursor-pointer'>
                            {option}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>

            {selectedOption === 'Custom Prompt' && <div>
                <Textarea className='mt-3 text-xl'
                    placeholder='Write your video generation prompt.'
                    onChange={(e) => onUserSelect('topic', e.target.value)}
                />

            </div>}

        </div>
    );
};

export default SelectTopic;