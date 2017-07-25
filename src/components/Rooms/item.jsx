import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import { TextField, RaisedButton } from 'material-ui';
import ArrowBackIcn from 'material-ui/svg-icons/navigation/arrow-back';

class RoomsItem extends PureComponent {
    static defaultProps = {
        roomProps: {},
        updateName: () => {}
    }

    constructor(props) {
        super(props);

        this.state = {
            name: this.props.roomProps.name
        }
    }

    componentWillReceiveProps(nextProps) {
        if(JSON.stringify(this.props.roomProps) !== JSON.stringify(nextProps.roomProps)) {
            this.setState({
                name: nextProps.roomProps.name
            })
        }
    }

    handleChangeName = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleClickSaveName = () => {
        this.props.updateName(this.state.name);
    }

    render() {
        return (
            <div className='roomsitemPage'>
                <div className='roomsitemPage__header'>
                    <Link to='/' className='roomsitemPage__header-goback'>
                        <ArrowBackIcn style={{ width: '40px', height: '40px' }} />
                    </Link>
                    <div className='roomsitemPage__header-title'>{this.props.roomProps.number}</div>
                </div>
                <div className='roomsitemPage__booking'>
                    <div className='roomsitemPage__booking-field'>
                        <TextField floatingLabelText='Имя' defaultValue={this.state.name} onChange={this.handleChangeName} />
                    </div>
                    <div className='roomsitemPage__booking-save'>
                        <RaisedButton primary label='Сохранить' onClick={this.handleClickSaveName} />
                    </div>
                </div>
            </div>
        )
    }
}

export default RoomsItem;
