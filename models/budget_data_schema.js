const mongoose = require('mongoose');

const budgetSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true 
},
  budget: { 
    type: Number, 
    required: true 
}, 
  color: {
    type: String,
    required: true,
    validate: [/^#[0-9A-F]{6}$/i, 'Color must be in hexadecimal format'] 
  }
}, { collection: 'expenses' });

module.exports = mongoose.model('budgetModel', budgetSchema);
