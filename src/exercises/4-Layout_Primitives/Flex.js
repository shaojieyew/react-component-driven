import styled from 'styled-components';
import { Box } from '../../components';
import { flexbox } from 'styled-system'

const Flex = styled(Box)({
	display: 'flex',
});

Flex.propTypes = Box.propTypes;

export default Flex;
