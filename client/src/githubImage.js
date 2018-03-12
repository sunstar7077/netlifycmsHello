import React from 'react';
import {connect} from 'react-redux';
import CMS from 'netlify-cms'

const orgImage = CMS.getWidget('image');

class GithubImageControl extends React.Component {
  render() {
    const {getAsset, config, ...rest} = this.props;
    // const backend = config.get('backend');
    // const repo = backend.get('repo');
    // const branch = backend.get('branch');
    // const url = `https://github.com/${repo}/raw/${branch}`
    const url = `https://github.com/piecyk/netlifycmsHello/raw/master`

    return (
      <orgImage.control
        {...rest}
        ref={ref => {
          this.ref = ref;
        }}
        getAsset={value => getAsset(`${url}${value}`)}
      />
    );
  }
  getWrappedInstance() {
    return this.ref;
  }
}

CMS.registerWidget(
  'githubImage',
  // connect(
  //  state => ({config: state.config}),
  //  null,
  //  null,
  //  { withRef: true }
  // )(GithubImageControl),
  GithubImageControl,
  orgImage.preview
);
