module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        categoryName: { type: String },
        offerId: { type: mongoose.Schema.ObjectId, ref: '' },
        offerType: { type: String },
        menu: {
            type: [{
                menuItem: { type: String },
    
                menuPrice: { type: String },
    
                offerPrice: { type: String },
    
                offerType: { type:String, enum: ['amount', 'percentage'], default: 'amount' },
            }]
        },
      },
    );
  
    schema.method("toJSON", function () {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Menu = mongoose.model("menu", schema);
    return Menu;
  };
  