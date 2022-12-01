module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      happyHour: { type: String },
      offerType: { type: String, enum: ['day', 'date'], default: 'date' },
      dateValue: { type: Date },
      isEveryDay: { type: String, enum: ['true', 'false'], default: 'false' },
      dayValue: { type: String },
      activeStatus: { type: Number, default: 1 },
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Offers = mongoose.model("offers", schema);
  return Offers;
};
