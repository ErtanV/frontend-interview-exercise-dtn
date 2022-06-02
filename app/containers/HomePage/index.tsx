/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Home from './Home';

export default function HomePage() {
  return (
    <div className="conainer">
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
      <div className="studentList">
        <Home />
      </div>
    </div>
  );
}
