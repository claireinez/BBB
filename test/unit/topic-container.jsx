import test from 'tape';
import React from 'react/addons';
import { TopicContainer } from '../../src/components/topic-container.jsx';
const TestUtils = React.addons.TestUtils;
const ShallowRenderer = TestUtils.createRenderer();


const topicContainer = () => test('topic container component should contain the header TEE', function (t) {

	ShallowRenderer.render(React.createElement(TopicContainer));
	t.equal(ShallowRenderer.getRenderOutput()._store.originalProps.className, 'topic', 'topic container has class "topic"');
});

export { topicContainer };