import React from 'react'
import { connect } from 'react-redux'
import { handleFilter } from '../reducers/filterReducer'

const Filter = (props) => {

    const handleChange = (event) => {
      event.preventDefault()
      props.handleFilter(event.target.value)
    }

    const style = {
      marginBottom: 10
    }
  
    return (
      <div style={style}>
        filter <input onChange={handleChange} value={props.filter}/>
      </div>
    )
  }
  
  const MapStateToProps = state => {
    return {
      filter: state.filter
    }
  }

  const MapDispatchToProps = {
    handleFilter
  }

const ConnectedFilter = connect(
    MapStateToProps,
    MapDispatchToProps
    )(Filter)
  export default ConnectedFilter