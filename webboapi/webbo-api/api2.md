---
id: plu-api
title: API Documentation
sidebar_label: PLU API
sidebar_position: 1
---

# PLU API Documentation

This document provides detailed information about the PLU API endpoint used to insert data into the system. The endpoint supports JSON formatted requests and responses.

## API Endpoint

**POST** `/{outlet_uuid}/plu/plu/insertdata`

### Parameters

- **outlet_uuid** (string): The unique identifier of the outlet. This should be provided in the path.

### Request Body

The request body should be in JSON format with the following structure:

```json
{
  "PLUName": "string",
  "Department": 0,
  "PLUOpen": false,
  "Sell1": 0,
  "Sell2": 0,
  "Sell3": 0,
  "Sell4": 0,
  "Sell5": 0,
  "Sell6": 0,
  "Sell7": 0,
  "Sell8": 0,
  "Sell9": 0,
  "Sell10": 0,
  "KP1": 0,
  "KP2": 0,
  "KP3": 0,
  "KP4": 0,
  "KP5": 0,
  "KP6": 0,
  "LinkMenu": false,
  "LinkMenuNo": 0,
  "PromotionId": 0,
  "AllowManagerChange": false,
  "LnkTo": "N",
  "RecipeID": 0,
  "CostPrice": 0,
  "AllowDiscount": false,
  "Preparation": false,
  "PLUActive": false,
  "PLUModified": false,
  "PluName_Chinese": "",
  "RentalItem": false,
  "OpenItem": false,
  "PoolTableNo": "",
  "IndividualPrint": false,
  "PLUModifier": false,
  "PLUOpen_Desc": false,
  "Weight": false,
  "DisplayImage": false,
  "imagename": "",
  "plutaxexempt": false,
  "exmpttax0": false,
  "exmpttax1": false,
  "exmpttax2": false,
  "exmpttax3": false,
  "exmpttax4": false,
  "exmpttax5": false,
  "exmpttax6": false,
  "exmpttax7": false,
  "exmpttax8": false,
  "exmpttax9": false,
  "PLUsoldout": false,
  "PopUpMenu": false,
  "MasterKPPrint": false,
  "masterkpprint2": false,
  "masterkpprint3": false,
  "MasterKpPrint4": false,
  "MasterKpPrint5": false,
  "MasterKpPrint6": false,
  "comments": false,
  "pluDiscEntitle": false,
  "TrackPrepItem": false,
  "TrackPrepMin": 0,
  "TrackprepMax": 0,
  "ForceServer": false,
  "Barcode": false,
  "Barcode1": "",
  "Barcode2": "",
  "Barcode3": "",
  "TicketTag": "",
  "ndScreenImage": false,
  "ndImageName": "",
  "RentalEndTime": 0,
  "DeptTrackPrepItem": false,
  "verifyImage": false,
  "PluTimeRange": false,
  "SecondaryDeptNo": 0,
  "AlternateDeptNo": 0,
  "PLUTaxInclusive": false,
  "PLUTimeRangePic": "",
  "PoolOn": "",
  "PoolOff": "",
  "TaxTag": "",
  "Description": "",
  "Consumable": false,
  "Exclusive": false,
  "ForcePLU": false,
  "StockPLULinked": "",
  "MemberRenewal": false,
  "MRenewalInterval": 0,
  "PLUImage": "string",
  "UOM": "",
  "StockQtyUOM": 0,
  "StockPLULinkedQty": 0,
  "SecondRentalItem": false,
  "KPRedColor": false,
  "ActivateMembers": false,
  "ActivatePLURangeKP": false,
  "PLURangeKP": 0,
  "PLUNumber": "string"
}
```

### Request Body Explanation

| Name | Schema | Description |
| --- | --- | --- |
| PLUName | string | Name of the PLU. |
| Department | integer | Department number associated with the PLU. |
| PLUOpen | boolean | Indicates if the PLU is open. |
| Sell1 - Sell10 | integer | Prices for different sell levels. |
| KP1 - KP6 | integer | Kitchen printer assignments. |
| LinkMenu | boolean | Indicates if the PLU is linked to a menu. |
| LinkMenuNo | integer | Number of the linked menu. |
| PromotionId | integer | ID of the promotion associated with the PLU. |
| AllowManagerChange | boolean | Indicates if a manager can change the PLU. |
| LnkTo | string | Link type. |
| RecipeID | integer | ID of the recipe associated with the PLU. |
| CostPrice | float | Cost price of the PLU. |
| AllowDiscount | boolean | Indicates if discounts are allowed on this PLU. |
| Preparation | boolean | Indicates if the PLU requires preparation. |
| PLUActive | boolean | Indicates if the PLU is active. |
| PLUModified | boolean | Indicates if the PLU has been modified. |
| PluName_Chinese | string | Chinese name of the PLU. |
| RentalItem | boolean | Indicates if the PLU is a rental item. |
| OpenItem | boolean | Indicates if the PLU is an open item. |
| PoolTableNo | string | Pool table number associated with the PLU. |
| IndividualPrint | boolean | Indicates if the PLU should be printed individually. |
| PLUModifier | boolean | Indicates if the PLU is a modifier. |
| PLUOpen_Desc | boolean | Indicates if the PLU has an open description. |
| Weight | boolean | Indicates if the PLU is sold by weight. |
| DisplayImage | boolean | Indicates if the PLU has a display image. |
| imagename | string | Name of the image file associated with the PLU. |
| plutaxexempt | boolean | Indicates if the PLU is tax exempt. |
| exmpttax0 - exmpttax9 | boolean | Individual tax exemptions. |
| PLUsoldout | boolean | Indicates if the PLU is sold out. |
| PopUpMenu | boolean | Indicates if the PLU has a pop-up menu. |
| MasterKPPrint | boolean | Indicates if the PLU should be printed on the master kitchen printer. |
| masterkpprint2 - masterkpprint6 | boolean | Additional master kitchen printer settings. |
| comments | boolean | Indicates if comments are allowed on the PLU. |
| pluDiscEntitle | boolean | Indicates if the PLU is entitled to discounts. |
| TrackPrepItem | boolean | Indicates if the PLU is a track preparation item. |
| TrackPrepMin | integer | Minimum track preparation time. |
| TrackprepMax | integer | Maximum track preparation time. |
| ForceServer | boolean | Indicates if the PLU forces server interaction. |
| Barcode | boolean | Indicates if the PLU has a barcode. |
| Barcode1 - Barcode3 | string | Barcode values. |
| TicketTag | string | Ticket tag associated with the PLU. |
| ndScreenImage | boolean | Indicates if the PLU has a second screen image. |
| ndImageName | string | Name of the second screen image file. |
| RentalEndTime | integer | Rental end time. |
| DeptTrackPrepItem | boolean | Indicates if the PLU tracks department preparation items. |
| verifyImage | boolean | Indicates if the PLU requires image verification. |
| PluTimeRange | boolean | Indicates if the PLU has a time range. |
| SecondaryDeptNo | integer | Secondary department number. |
| AlternateDeptNo | integer | Alternate department number. |
| PLUTaxInclusive | boolean | Indicates if the PLU is tax inclusive. |
| PLUTimeRangePic | string | Picture associated with the PLU time range. |
| PoolOn | string | Time when the pool starts. |


### Expected Responses

| Code | Description | Media Type | Schema |
| --- | --- | --- | --- |
| 201 | Successful Response | application/json | "string" |
| 422 | Validation Error | application/json  |

