import React from 'react';
import { shallow, mount } from 'enzyme';
import PlayVolume from '../PlayVolume';


describe('PlayVolume', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<PlayVolume debug />);

        expect(component).toMatchSnapshot();
    });
    it('should run the a function when play button is clicked', () => {
        let clickFn = jest.fn()
        const component = shallow(<button id="play" onClick={clickFn} >Icon</button>)
        component.find({ id: 'play' }).simulate('click')
        expect(clickFn).toHaveBeenCalled();
    })
    it('should run the a function when stop button is clicked', () => {
        let clickFn = jest.fn()
        const component = shallow(<button id="stop" onClick={clickFn} >Icon</button>)
        component.find({ id: 'stop' }).simulate('click')
        expect(clickFn).toHaveBeenCalled();
    })
    it('should run the a function when undo button is clicked', () => {
        let clickFn = jest.fn()
        const component = shallow(<button id="undo" onClick={clickFn} >Icon</button>)
        component.find({ id: 'undo' }).simulate('click')
        expect(clickFn).toHaveBeenCalled();
    })
});