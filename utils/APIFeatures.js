class APIFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  pagination() {
    const page = this.queryString.page * 1 || 1; //2
    const limit = this.queryString.limit * 1 || 100; //5
    const skip = (page - 1) * limit;
    // page 1 1-10, page 2 11-20,page 3 21-30

    this.query = this.query.offset(skip).limit(limit); // limit = limit the amount result ex : 10 result/page
    /* skip = the amount of result that should be skipped before query the data
        because we cant to get second page, we have to skip 10 doc
      */
    return this;
  }
}

module.exports = APIFeatures;
