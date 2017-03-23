import React from 'react'
import { connect } from 'react-redux'
import { sample } from '../../actions'

const Sample = ({ uuid, onSampleClick }) => (
    <div>
        <div class="well well-lg">new uuid is {uuid}</div>
		<button type="button" class="btn btn-default" onClick={onSampleClick} >Regenerate</button>
    </div>
)

const mapStateToProps = (state, props) => ({
	filter: props.filter,
	uuid: state.sample
})

const mapDispatchToProps = (dispatch) => ({
	onSampleClick() {
		dispatch(sample())
	}
})

Sample.propTypes = {
	filter: React.PropTypes.string,
	uuid: React.PropTypes.string,
	onSampleClick: React.PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Sample)
