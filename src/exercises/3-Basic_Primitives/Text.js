import PropTypes from 'prop-types';
import styled from 'styled-components';
import css from '@styled-system/css';
import {typography, color, variant} from 'styled-system';
import theme from '../../theme'

/**
 * A component to render all text in the app.
 */
const Text = styled.p(
	css({
		fontFamily: 'body',
		fontSize: 'md',
		fontWeight: 'normal'
	}),
	typography,
	color,
   	variant({
       variants: theme.textStyles,
   })
);

Text.propTypes = {
	variant: PropTypes.oneOf(Object.keys(theme.textStyles)),
	children: PropTypes.node,
};

/** @component */
export default Text;
