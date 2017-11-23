import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });
// Make Enzyme functions available in all test files without importing
global.shallow = shallow;
global.render = render;
global.mount = mount;

// test creating a new battle
test('should create a new battle', () => {
    const wrapper = shallow(
        <LeftPanel newBattle={newBattle} />
    );

    expect(wrapper).toMatchSnapshot();

    wrapper.find('[name="button"]').simulate('click');

    expect(wrapper).toMatchSnapshot();
});
