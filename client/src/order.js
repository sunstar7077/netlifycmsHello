// class Control extends React.Component {
//   componentDidMount() {
//     this.props.onChange(['test']);
//   }
//   render() {
//     const {value, field, posts} = this.props;
//     // console.log('v', value, posts);
//     /// console.log(this.props.query('123123', 'posts', [], ''));
//     // return h('input', { type: 'text', value: value ? value.join(', ') : '', onChange: this.handleChange });
//     return (
//       <div>123</div>
//     )
//   }
// }

// const selectEntry = (state, collection, slug) => (
//   state.getIn(['entities', `${ collection }.${ slug }`])
// );

// const selectEntries = (state, collection) => {
//   const slugs = state.getIn(['pages', collection, 'ids']);
//   return slugs && slugs.map(slug => selectEntry(state, collection, slug));
// };

// const CControl= connect(
//   (state) => {
//     const posts = selectEntries(state.entries, 'posts').toJS()
//     return {
//       posts
//     };
//   },
//   {},
//   null,
//   {withRef: true,}
// )(Control);