// =============================================================================
// Import modules
// =============================================================================
import React from 'react';
import PropTypes from 'prop-types';
import hoistStatics from 'hoist-non-react-statics';

export function connect(Wrapped) {
  const wrappedName = Wrapped.displayName || Wrapped.name || 'Component';

  // eslint-disable-next-line metalab/react/prefer-stateless-function
  class WithId extends React.PureComponent {
    static displayName = `withId(${(wrappedName: any)})`;
    static contextTypes = {
      getConfig: PropTypes.func.isRequired,
      getBreakpoint: PropTypes.func.isRequired,
    };

    render() {
      const props = {
        config: this.context.getConfig(),
        breakpoint: this.context.getBreakpoint(),
        ...this.props,
      };
      return <Wrapped {...(props: any)}/>;
    }
  }

  return hoistStatics(WithId, Wrapped);
}

export class Provider extends React.Component {
  static childContextTypes = {
    getConfig: PropTypes.func.isRequired,
    getBreakpoint: PropTypes.func.isRequired,
  };

  static contextTypes = {
    getConfig: PropTypes.func,
    getBreakpoint: PropTypes.func,
  };

  getChildContext() {
    return {
      getConfig: () =>
        this.props.config ||
        this.context.getConfig && this.context.getConfig(),
      getBreakpoint: () =>
        this.props.breakpoint ||
        this.context.getBreakpoint && this.context.getBreakpoint() ||
        'desktop',
    };
  }

  render() {
    return React.Children.only(this.props.children);
  }
}

export default Provider;
