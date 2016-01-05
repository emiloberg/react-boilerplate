import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import Link from './Link.jsx';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

function renderLinkComponent({ active }) {
	const renderer = TestUtils.createRenderer();
	renderer.render(<Link active={ active } onClick={ function noop() {} }>LinkText</Link>);
	return renderer.getRenderOutput();
}

describe('Link', () => {
	describe('Inactive', () => {
		it('should be a link', () => {
			expect(renderLinkComponent({ active: false }).type).toEqual('a');
		});

		it('should print link text', () => {
			expect(renderLinkComponent({ active: false })).toIncludeJSX('LinkText');
		});

	});

	describe('Active', () => {
		it('should be a span', () => {
			expect(renderLinkComponent({ active: true }).type).toEqual('span');
		});

		it('should print link text', () => {
			expect(renderLinkComponent({ active: false })).toIncludeJSX('LinkText');
		});
	});
});
