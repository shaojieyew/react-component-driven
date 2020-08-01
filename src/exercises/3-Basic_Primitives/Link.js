import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { css } from '@styled-system/css';
import { Text } from './Text';

/**
 * A component to render all text in the app.
 */

const Link = styled(props=> <Text as="a" {...props} />)( props =>
	css({
		cursor: 'pointer',
		'&, &:link, &:visited': {
			color: props.color || 'primary',
		},
		'&:hover, &:focus, &:active': {
			color: 'accent',
		},
		'&:focus': {
			outline: '1px dashed',
			outlineColor: 'accent',
			outlineOffset: 2,
		}
	})
);

Link.propTypes = {
	children: PropTypes.node,
};

/** @component */
export default Link;
