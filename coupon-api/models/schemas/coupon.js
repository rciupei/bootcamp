name: {type: String, require: true, trim: true},
url: {type: String, required: true, trim: true},
companyName: {type: String, required: true, trim: true},
startDate: {type: Date, default: Date.now, index: true},
endDate: {type: Date, index: true},
tags: [Number],
clicks: {type: [Date], default: []},
views: {type: [Date], default: []},
redeemed: {type: [Date], default: []},
postedBy: {type: Schema.ObjectId, ref: 'User', required: true},
approvedDate: Date,
createdAt: 'createdDate',
updatedAt: 'updatedDate'
