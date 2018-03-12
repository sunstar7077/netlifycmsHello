import '!!file-loader?name=netlifyCms.css!netlify-cms/dist/cms.css'
import CMS from 'netlify-cms'

import React from 'react';
import {connect} from 'react-redux';

console.log('ready');

class Control extends React.Component {
  componentDidMount() {
    this.props.onChange(['test']);
  }
  render() {
    const {value, field, posts} = this.props;
    // console.log('v', value, posts);
    /// console.log(this.props.query('123123', 'posts', [], ''));
    // return h('input', { type: 'text', value: value ? value.join(', ') : '', onChange: this.handleChange });
    return (
      <div>123</div>
    )
  }
}

const selectEntry = (state, collection, slug) => (
  state.getIn(['entities', `${ collection }.${ slug }`])
);

const selectEntries = (state, collection) => {
  const slugs = state.getIn(['pages', collection, 'ids']);
  return slugs && slugs.map(slug => selectEntry(state, collection, slug));
};

const CControl= connect(
  (state) => {
    const posts = selectEntries(state.entries, 'posts').toJS()
    return {
      posts
    };
  },
  {},
  null,
  {withRef: true,}
)(Control);

const orgImage = CMS.getWidget('image');

class GithubImageControl extends React.Component {
  render() {
    const {getAsset, config, ...rest} = this.props;
    // const backend = config.get('backend');
    // const repo = backend.get('repo');
    // const branch = backend.get('branch');
    // const url = `https://github.com/${repo}/raw/${branch}`
    const url = `https://github.com/piecyk/netlifycmsHello/raw/content`

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
