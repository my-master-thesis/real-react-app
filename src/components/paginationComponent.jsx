import React, {Component} from "react";

export class Pagination extends Component {

  state = {
    selectedPage: 0,
    pageSize: this.props.pageSize
  }

  changePage(nr) {
    this.setState(prevState => {
      const newPage = prevState.selectedPage + nr;
      this.emitChange(newPage, prevState.pageSize);
      return { selectedPage: newPage};
    });
  }

  setPage(page) {
    this.setState({selectedPage: page});
    this.emitChange(page, this.state.pageSize);
  }

  emitChange(page, size) {
    this.props.page({
      pageIndex: page,
      pageSize: size,
    });
  }

  handleChange(event) {
    const size = Number(event.target.value);
    let page = this.state.selectedPage;
    const maxPages = Math.floor(this.props.length / size);
    if (page > maxPages) {
      this.setState({selectedPage: maxPages, pageSize: size});
    } else {
      this.setState({pageSize: size});
    }
    this.emitChange(page, size);
  }

  render() {
    const maxPages = Math.floor(this.props.length / this.props.pageSize);

    let previous, first, dotsLeft, dotsRight, last, next;
    if (this.state.selectedPage > 0) {
      previous = (<li className="page-item">
        <button onClick={() => this.changePage(-1)} className="page-link  previous-page">Nazaj</button>
      </li>);
      first = (<li className="page-item">
        <button onClick={() => this.setPage(0)} className="page-link">1</button>
      </li>);
    }
    if (this.state.selectedPage > 1) {
      dotsLeft = (<li className="page-item">
        <button className="page-link">...</button>
      </li>);
    }
    if (this.state.selectedPage < maxPages - 1) {
      dotsRight = (<li className="page-item">
        <button className="page-link">...</button>
      </li>);
    }
    if (this.state.selectedPage !== maxPages) {
      last = (<li className="page-item">
        <button onClick={() => this.setPage(maxPages)} className="page-link active">{maxPages + 1}</button>
      </li>);
    }
    if (this.state.selectedPage < maxPages) {
      next = (<li className="page-item">
        <button onClick={() => this.changePage(1)} className="page-link  next-page">Naprej</button>
      </li>);
    }

    let options = this.props.pageSizeOptions.map(option => (<option value={option} key={option}>{option}</option>));

    return (
      <div className="row pagination-row">
        <div className="col-9 col-sm-10">
          <nav>
            <ul className="pagination">
              {previous}
              {first}
              {dotsLeft}
              <li className="page-item active">
                <button className="page-link">{this.state.selectedPage + 1}</button>
              </li>
              {dotsRight}
              {last}
              {next}
            </ul>
          </nav>
        </div>
        <div className="col-3 col-sm-2">
          <select className="form-control" value={this.state.pageSize} onChange={(event) => this.handleChange(event)}>
            {options}
          </select>
        </div>
      </div>

    );
  }
}
