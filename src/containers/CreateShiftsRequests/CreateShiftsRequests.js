import React, { Component } from 'react';

class CreateShiftsRequests extends Component {
    state = {
        createdShiftList: []
    }

    render() {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const daysInNextMonth = new Date(currentYear, currentMonth + 2, 0).getDate();

        // const monthList = [
        //     'Leden', 'Únor', 'Březen', 'Duben',
        //     'Květen', 'Červen', 'Červenec', 'Srpen',
        //     'Září', 'Říjen', 'Listopad', 'Prosinec'
        // ]

        // const dayList = [
        //     'neděle', 'pondělí', 'úterý', 'středa',
        //     'čtvrtek', 'pátek', 'sobota'
        // ]

        function isWorkday(day) {
            return day === 'neděle' || 'sobota' ? 'dayOff' : 'workDay'
        }

        const defaultShiftsTemplate = {
            'workDay': {
                box: [
                    {start: 13.5, end: 22}
                ],
                cat: [
                    {start: 13, end: 23.5}
                ],
                floor: [
                    {start: 13.25, end: 18.5},
                    {start: 13.5, end: 24},
                    {start: 18.5, end: 24}
                ]
            },
            'dayOff': {
                box: [
                    {start: 9.5, end: 20},
                    {start: 13, end: 22}
                ],
                cat: [
                    {start: 9, end: 21},
                    {start: 14, end: 23.5}
                ],
                floor: [
                    {start: 9.25, end: 20},
                    {start: 9.5, end: 24},
                    {start: 16, end: 24}
                ]
            }
        }

        function createDefaultShifts() {
            let array = [];
            for (let i = 1; i < daysInNextMonth; i++) {
                array.push(defaultShiftsTemplate[isWorkday(new Date(currentYear, currentMonth + 1, i).getDay())])
            }
            return array;
        }

        this.setState({
            createdShiftList: createDefaultShifts()
        })

        console.log(this.state.createdShiftList)

        return (
            <div className="CreateShiftsRequests">
                
            </div>
        )
    }
}

export default CreateShiftsRequests;