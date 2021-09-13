import React from 'react';

import withModalPopup from 'common/component/withModalPopup';

const TestPopup = (props) => {
    return (
        <React.Fragment>팝업이다</React.Fragment>
    )
}

export default (props) => {
    return withModalPopup(props)(TestPopup);
};