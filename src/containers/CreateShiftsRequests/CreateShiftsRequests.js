import React, { Component } from 'react';

import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

class CreateShiftsRequests extends Component {
    state = {
        shifts: []
    }

    createDefaultShifts = () => {
        let shifts = [];

        for (let i = 1; i <= new Date(new Date().getFullYear(), new Date().getMonth() + 2, 0).getDate(); i++) {
            let day = i;
            let month = null;

            switch (new Date().getMonth() + 1) {
                case 0: month = 'Leden'
                    break;
                case 1: month = 'Únor'
                    break;
                case 2: month = 'Březen'
                    break;
                case 3: month = 'Duben'
                    break;
                case 4: month = 'Květen'
                    break;
                case 5: month = 'Červen'
                    break;
                case 6: month = 'Červenec'
                    break;
                case 7: month = 'Srpen'
                    break;
                case 8: month = 'Září'
                    break;
                case 9: month = 'Říjen'
                    break;
                case 10: month = 'Listopad'
                    break;
                case 11: month = 'Prosinec'
                    break;
                default:
                    break;
            }

            let dayOfTheWeek = null;

            switch (new Date(`${new Date().getFullYear()}-${new Date().getMonth() + 2}-${i}`).getDay()) {
                case 0: dayOfTheWeek = 'neděle'
                    break;
                case 1: dayOfTheWeek = 'pondělí'
                    break;
                case 2: dayOfTheWeek = 'úterý'
                    break;
                case 3: dayOfTheWeek = 'středa'
                    break;
                case 4: dayOfTheWeek = 'čtvrtek'
                    break;
                case 5: dayOfTheWeek = 'pátek'
                    break;
                case 6: dayOfTheWeek = 'sobota'
                    break;
                default:
                    break;
            }

            let shiftsOfTheDay = null;

            if (new Date(`${new Date().getFullYear()}-${new Date().getMonth() + 2}-${i}`).getDay() === 0 ||
                new Date(`${new Date().getFullYear()}-${new Date().getMonth() + 2}-${i}`).getDay() === 6) {
                shiftsOfTheDay = {
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
            } else {
                shiftsOfTheDay = {
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
                }
            }

            shifts.push({
                available: true,
                day: day,
                month: month,
                year: new Date().getFullYear(),
                dayOfTheWeek: dayOfTheWeek,
                shiftsOfTheDay: shiftsOfTheDay
            });
        }
        console.log(new Date(`${new Date().getFullYear()}-${new Date().getMonth() + 2}-1`).getDay())
        this.setState({shifts})
        console.log('стандартные смены созданы')
    }
    
    render() {
        const days = (
            <div className="CreateShiftsRequests__days">
                {this.state.shifts.map((day, dayIndex) => (
                    <div className="CreateShiftsRequests__day" key={dayIndex}>
                        <h3>{day.day} {day.month}, {day.dayOfTheWeek}</h3>
                        <div className="CreateShiftsRequests__position">
                            <p>box</p>
                            {day.shiftsOfTheDay.box.map((shift, shiftIndex) => (
                                <div key={shiftIndex}>
                                    <Input 
                                        label='start'
                                        value={shift.start}
                                        onChange={(e) => {
                                            const copyState = this.state;
                                            copyState.shifts[dayIndex].shiftsOfTheDay.box[shiftIndex].start = e.target.value;
                                            this.setState({...copyState});
                                        }} />
                                    <Input
                                        label='end'
                                        value={shift.end}
                                        onChange={(e) => {
                                            const copyState = this.state;
                                            copyState.shifts[dayIndex].shiftsOfTheDay.box[shiftIndex].end = e.target.value;
                                            this.setState({...copyState});
                                        }} />
                                </div>
                            ))}
                        </div>
                        <div className="CreateShiftsRequests__position">
                            <p>cat</p>
                            {day.shiftsOfTheDay.cat.map((shift, shiftIndex) => (
                                <div key={shiftIndex}>
                                    <Input 
                                        label='start'
                                        value={shift.start}
                                        onChange={(e) => {
                                            const copyState = this.state;
                                            copyState.shifts[dayIndex].shiftsOfTheDay.cat[shiftIndex].start = e.target.value;
                                            this.setState({...copyState});
                                        }} />
                                    <Input
                                        label='end'
                                        value={shift.end}
                                        onChange={(e) => {
                                            const copyState = this.state;
                                            copyState.shifts[dayIndex].shiftsOfTheDay.cat[shiftIndex].end = e.target.value;
                                            this.setState({...copyState});
                                        }} />
                                </div>
                            ))}
                        </div>
                        <div className="CreateShiftsRequests__position">
                            <p>floor</p>
                            {day.shiftsOfTheDay.floor.map((shift, shiftIndex) => (
                                <div key={shiftIndex}>
                                    <Input 
                                        label='start'
                                        value={shift.start}
                                        onChange={(e) => {
                                            const copyState = this.state;
                                            copyState.shifts[dayIndex].shiftsOfTheDay.floor[shiftIndex].start = e.target.value;
                                            this.setState({...copyState});
                                        }} />
                                    <Input
                                        label='end'
                                        value={shift.end}
                                        onChange={(e) => {
                                            const copyState = this.state;
                                            copyState.shifts[dayIndex].shiftsOfTheDay.floor[shiftIndex].end = e.target.value;
                                            this.setState({...copyState});
                                        }} />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        )

        return (
            <div className="CreateShiftsRequests">
                <h2>vytvořit požadavky</h2>
                {this.state.shifts.length === 0 ?
                    <Button text='vytvořit standardní směny'
                    onClick={this.createDefaultShifts} /> : days}
            </div>
        )
    }
}

export default CreateShiftsRequests;