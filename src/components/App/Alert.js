import React from 'react';
import { Alert as BsAlert } from 'react-bootstrap';
import { inject, observer } from 'mobx-react';

/**
 * Alert component to notify about application errors.
 */
function Alert({ view }) {
  if (!view.hasErrors) return null;

  return (
    <section>
      <BsAlert bsStyle='danger'>
        <p>{view.lastError}</p>
      </BsAlert>
    </section>
  );
}

export default inject('view')(observer(Alert)) ;
