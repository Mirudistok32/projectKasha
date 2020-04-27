import React from 'react'
import Items from './Items'
import { connect } from 'react-redux';
import { setDoneAc, setImportantAc, setDeleteItemAc } from './../../../../../../bll/item-reducer'

class ContainerItems extends React.Component {

    search = (items, searchLabel) => {
        if (searchLabel === 0) {
            return items;
        }
        return items.filter(i => {
            return i.title.toLowerCase().indexOf(searchLabel.toLowerCase()) > -1;
        })
    }

    filter = (items, filter) => {
        switch (filter) {
            case 'all': {
                return items
            }
            case 'active': {
                return items.filter(i => !i.done)
            }
            case 'important': {
                return items.filter(i => i.important === true)
            }
            case 'done': {
                return items.filter(i => i.done === true)
            }
            default: return items;
        }
    }

    render() {
        const { items, searchLabel, setDoneAc, setImportantAc, setDeleteItemAc, filterSearch } = this.props;

        return <Items
            items={this.filter(this.search(items, searchLabel), filterSearch)}
            setDoneAc={setDoneAc}
            setImportantAc={setImportantAc}
            setDeleteItemAc={setDeleteItemAc} />
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.itemReducer.items,
        searchLabel: state.itemReducer.searchLabel,
        filterSearch: state.itemReducer.filterSearch,
    }
}
const mapDispatchToProps = ({
    setDoneAc,
    setImportantAc,
    setDeleteItemAc,
})

export default connect(mapStateToProps, mapDispatchToProps)(ContainerItems);