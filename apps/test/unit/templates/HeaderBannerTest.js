import React from 'react';
import {shallow} from 'enzyme';
import {expect} from '../../util/configuredChai';
import {allowConsoleErrors} from '../../util/testUtils';
import HeaderBanner from '@cdo/apps/templates/HeaderBanner';
import { combineReducers, createStore } from 'redux';
import responsiveRedux from '@cdo/apps/code-studio/responsiveRedux';

describe('HeaderBanner', () => {
  allowConsoleErrors();
  const store = createStore(combineReducers({responsive: responsiveRedux}));

  it('renders a short HeaderBanner without a subheading or description', () => {
    //expect(shallow(<HeaderBanner headingText="Home" />, {context: {store}})).to.containMatchingElement(<div>Home</div>);

    const wrapper = shallow(
      <HeaderBanner
        headingText="Home"
        short={true}
      />, {context: {store}},
    );
    console.log(wrapper);
    expect(wrapper).to.containMatchingElement(<div>Home</div>);
  });

  it('renders a short HeaderBanner with a subheading', () => {
    const wrapper = shallow(
      <HeaderBanner
        headingText="Home"
        subHeadingText="This is where you can find useful information."
        short={true}
      />, {context: {store}},
    );
    expect(wrapper).to.containMatchingElement(
      <div style={{height: 140, maxWidth: '60%', marginTop: 25}}>
        <div>
          Home
        </div>
        <div>
          This is where you can find useful information.
        </div>
      </div>
    );
  });

  it('renders an extended HeaderBanner with a subheading and description', () => {
    const wrapper = shallow(
      <HeaderBanner
        headingText="Home"
        subHeadingText="This is where you can find useful information."
        description="Everything on the page is customized to you and easy to find."
        short={false}
      />, {context: {store}},
    );
    expect(wrapper).to.containMatchingElement(
      <div style={{height: 260, maxWidth: '60%', marginTop: 25}}>
        <div>
          Home
        </div>
        <div>
          This is where you can find useful information.
        </div>
        <div>
          Everything on the page is customized to you and easy to find.
        </div>
      </div>
    );
  });
});
