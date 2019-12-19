import React from "react";
import { connect } from "react-redux";

import Layout from "../../components/Layout";
import Item from "./Item";
import Popup from "../../components/Popup";

import { get as statsGet, set as statsSet } from "../../reducers/stats";
import { sortTableNumbers, sortTableStrings } from "../../lib/sort";

import styles from "./styles.scss";

class Stats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkList: [],
      order: null,
      orderField: null
    };
  }

  componentDidMount() {
    this.props.statsGet();
  }

  onChecked = (id, checked) => {
    let { checkList } = this.state;
    if (checked) {
      if (checkList.indexOf(id) === -1) {
        checkList.push(id);
      }
    } else {
      if (checkList.length > 1) {
        checkList.splice(checkList.indexOf(id), 1);
      }
    }
    this.setState({
      checkList: checkList
    });
  };

  onCheckedAll = checked => {
    const { stats } = this.props;
    let checkList = [];
    const max = stats.data.length;
    if (checked) {
      for (let i = 0; i < max; i++) {
        const { id } = stats.data[i];
        checkList.push(id);
      }
    } else {
      if (max > 0) {
        checkList = [stats.data[0].id];
      }
    }
    this.setState({
      checkList: checkList
    });
  };

  onRemove = id => {
    const { stats } = this.props;
    let { data } = stats;
    for (let i = 0, max = data.length; i < max; i++) {
      let item = data[i];
      if (item && item.id === id) {
        data.splice(i, 1);
        break;
      }
    }
    this.props.statsSet(data);
  };

  sortTable = (order, field) => {
    const {
      stats: { data }
    } = this.props;
    const result = sortTableNumbers(data, order, field);
    this.setState({
      orderField: result.orderField,
      order: result.order
    });
    this.props.statsSet(result.data);
  };

  sortTableString = (order, field) => {
    const {
      stats: { data }
    } = this.props;
    const result = sortTableStrings(data, order, field);
    this.setState({
      orderField: result.orderField,
      order: result.order
    });
    this.props.statsSet(result.data);
  };

  render() {
    const { stats } = this.props;
    const { checkList, orderField } = this.state;
    return (
      <Layout>
        <h1>Stats</h1>
        {stats.load && stats.done ? (
          <table cellSpacing="0" cellPadding="0" width="100%">
            <thead>
              <tr>
                <th>
                  <input
                    type="checkbox"
                    onChange={e => this.onCheckedAll(e.target.checked)}
                  />
                </th>
                <th
                  className={styles.sort}
                  onClick={() =>
                    this.sortTableString(this.state.order, "keyword")
                  }
                >
                  Keyword
                  {orderField === "keyword" && (
                    <>
                      <span>
                        {this.state.order === true && "↑"}
                        {this.state.order === false && "↓"}
                      </span>{" "}
                    </>
                  )}
                </th>
                <th></th>
                <th></th>
                <th
                  className={styles.sort}
                  onClick={() =>
                    this.sortTable(this.state.order, "suggestions_count")
                  }
                >
                  Traffic score
                  {orderField === "suggestions_count" && (
                    <>
                      <span>
                        {this.state.order === true && "↑"}
                        {this.state.order === false && "↓"}
                      </span>{" "}
                    </>
                  )}
                </th>
                <th
                  className={styles.sort}
                  onClick={() =>
                    this.sortTable(
                      this.state.order,
                      "ipad_position_info.position"
                    )
                  }
                >
                  Rank
                  {orderField === "ipad_position_info.position" && (
                    <>
                      <span>
                        {this.state.order === true && "↑"}
                        {this.state.order === false && "↓"}
                      </span>{" "}
                    </>
                  )}
                </th>
                <th
                  className={styles.sort}
                  onClick={() =>
                    this.sortTable(this.state.order, "ipad_total_apps")
                  }
                >
                  Total apps
                  {orderField === "ipad_total_apps" && (
                    <>
                      <span>
                        {this.state.order === true && "↑"}
                        {this.state.order === false && "↓"}
                      </span>{" "}
                    </>
                  )}
                </th>
                <th>Color</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {stats.data &&
                (stats.data.length > 0 ? (
                  stats.data.map(item => {
                    return (
                      <Item
                        onChecked={(id, checked) => this.onChecked(id, checked)}
                        onRemove={id => this.onRemove(id)}
                        value={checkList[checkList.indexOf(item.id)] || false}
                        key={item.id}
                        data={item}
                      />
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan="9">Data is empty</td>
                  </tr>
                ))}
            </tbody>
          </table>
        ) : (
          "Loading..."
        )}
        <Popup>
          <div>Hello world!</div>
        </Popup>
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  statsGet: () => dispatch(statsGet()),
  statsSet: value => dispatch(statsSet(value))
});

export default connect(
  state => ({
    stats: state.stats
  }),
  mapDispatchToProps
)(Stats);
