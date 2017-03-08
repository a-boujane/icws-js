export class Debug{
    data= [{
        "title": "Workforce Management",
        "url": "icws/(sessionId)/wfm/Wfm.htm#application",
        "id": "icws-sessionId-wfm-Wfm-htm-application",
        "depth": 0,
        "type": "application",
        "children": [
            {
                "title": "/icws/{sessionId}/messaging/subscriptions/wfm-data",
                "url": "icws/(sessionId)/wfm/Wfm.htm#icws-sessionId-messaging-subsc",
                "id": "icws-sessionId-wfm-Wfm-htm-icws-sessionId-messaging-subsc",
                "depth": 1,
                "type": "resources",
                "children": [
                    {
                        "title": "data-versions",
                        "url": "icws/(sessionId)/messaging/subscriptions/wfm-data/data-versions/index.htm#resource",
                        "id": "icws-sessionId-messaging-subscriptions-wfm-data-data-versions-index-htm-resource",
                        "depth": 2,
                        "type": "resource",
                        "children": [
                            {
                                "title": "PUT",
                                "url": "icws/(sessionId)/messaging/subscriptions/wfm-data/data-versions/index.htm#put",
                                "type": "put-method",
                                "depth": 3,
                                "data": {
                                    "body": {},
                                    "headers": [
                                        "ININ-ICWS-CSRF-Token",
                                        "Cookie"
                                    ],
                                    "template": [
                                        "sessionId"
                                    ],
                                    "query_params": []
                                },
                                "id": "icws-sessionId-messaging-subscriptions-wfm-data-data-versions-index-htm-put"
                            },
                            {
                                "title": "DELETE",
                                "url": "icws/(sessionId)/messaging/subscriptions/wfm-data/data-versions/index.htm#delete",
                                "type": "delete-method",
                                "depth": 3,
                                "data": {
                                    "body": {},
                                    "headers": [
                                        "ININ-ICWS-CSRF-Token",
                                        "Cookie"
                                    ],
                                    "template": [
                                        "sessionId"
                                    ],
                                    "query_params": []
                                },
                                "id": "icws-sessionId-messaging-subscriptions-wfm-data-data-versions-index-htm-delete"
                            }
                        ]
                    }
                ]
            },
            {
                "title": "/icws/{sessionId}/wfm",
                "url": "icws/(sessionId)/wfm/Wfm.htm#icws-sessionId-wfm",
                "id": "icws-sessionId-wfm-Wfm-htm-icws-sessionId-wfm",
                "depth": 1,
                "type": "resources",
                "children": [
                    {
                        "title": "time-off",
                        "url": "icws/(sessionId)/wfm/time-off/index.htm#resource",
                        "id": "icws-sessionId-wfm-time-off-index-htm-resource",
                        "depth": 2,
                        "type": "resource",
                        "children": [
                            {
                                "title": "POST",
                                "url": "icws/(sessionId)/wfm/time-off/index.htm#post",
                                "type": "post-method",
                                "depth": 3,
                                "data": {
                                    "body": {
                                        "reviewedDateTimeUtc": "DateTime",
                                        "waitlistReason": {
                                            "ActivityCodeNotPartOfAccrualPlan": "2",
                                            "UserDoesNotBelongToCoverageGroup": "7",
                                            "Unknown": "1",
                                            "NotWaitlisted": "0",
                                            "NotEnoughAvailableAllotments": "5",
                                            "NoAllotmentDataExists": "8",
                                            "AutoApproveDisabled": "3",
                                            "InvalidatesApprovedRequestsInFuture": "9",
                                            "NotEnoughAccruedHours": "4",
                                            "UserDoesNotBelongToSchedulingUnit": "6"
                                        },
                                        "description": "String",
                                        "startUtc": "DateTime",
                                        "lengthInMinutes": "Int",
                                        "requestType": {
                                            "FullDay": "3",
                                            "PartialDay": "5",
                                            "All": "15"
                                        },
                                        "requestState": {
                                            "Canceled": "13",
                                            "All": "1365",
                                            "Approved": "5",
                                            "Pending": "3",
                                            "Denied": "7"
                                        },
                                        "denyReason": {
                                            "RequestExceedsWaitlistCap": "2",
                                            "RequestOutsideActiveTimeOffPlan": "4",
                                            "RequestOnBlackoutDay": "3",
                                            "Unknown": "1",
                                            "RequestOverlapsWithExistingTOR": "5",
                                            "NotDenied": "0"
                                        },
                                        "reviewerUserId": "String",
                                        "activityCodeId": "String",
                                        "submittedDateTimeUtc": "DateTime",
                                        "endUtc": "DateTime",
                                        "timeOffRequestId": "String",
                                        "cicUserName": "String",
                                        "submittedUserId": "String",
                                        "isPaidTime": "Boolean"
                                    },
                                    "headers": [
                                        "ININ-ICWS-CSRF-Token",
                                        "Cookie"
                                    ],
                                    "template": [
                                        "sessionId"
                                    ],
                                    "query_params": []
                                },
                                "id": "icws-sessionId-wfm-time-off-index-htm-post"
                            },
                            {
                                "title": "{timeOffRequestId}",
                                "url": "icws/(sessionId)/wfm/time-off/(timeOffRequestId)/index.htm#resource",
                                "id": "icws-sessionId-wfm-time-off-timeOffRequestId-index-htm-resource",
                                "depth": 3,
                                "type": "resource",
                                "children": [
                                    {
                                        "title": "PUT",
                                        "url": "icws/(sessionId)/wfm/time-off/(timeOffRequestId)/index.htm#put",
                                        "type": "put-method",
                                        "depth": 4,
                                        "data": {
                                            "body": {
                                                "reviewedDateTimeUtc": "DateTime",
                                                "waitlistReason": {
                                                    "ActivityCodeNotPartOfAccrualPlan": "2",
                                                    "UserDoesNotBelongToCoverageGroup": "7",
                                                    "Unknown": "1",
                                                    "NotWaitlisted": "0",
                                                    "NotEnoughAvailableAllotments": "5",
                                                    "NoAllotmentDataExists": "8",
                                                    "AutoApproveDisabled": "3",
                                                    "InvalidatesApprovedRequestsInFuture": "9",
                                                    "NotEnoughAccruedHours": "4",
                                                    "UserDoesNotBelongToSchedulingUnit": "6"
                                                },
                                                "description": "String",
                                                "startUtc": "DateTime",
                                                "lengthInMinutes": "Int",
                                                "requestType": {
                                                    "FullDay": "3",
                                                    "PartialDay": "5",
                                                    "All": "15"
                                                },
                                                "requestState": {
                                                    "Canceled": "13",
                                                    "All": "1365",
                                                    "Approved": "5",
                                                    "Pending": "3",
                                                    "Denied": "7"
                                                },
                                                "denyReason": {
                                                    "RequestExceedsWaitlistCap": "2",
                                                    "RequestOutsideActiveTimeOffPlan": "4",
                                                    "RequestOnBlackoutDay": "3",
                                                    "Unknown": "1",
                                                    "RequestOverlapsWithExistingTOR": "5",
                                                    "NotDenied": "0"
                                                },
                                                "reviewerUserId": "String",
                                                "activityCodeId": "String",
                                                "submittedDateTimeUtc": "DateTime",
                                                "endUtc": "DateTime",
                                                "timeOffRequestId": "String",
                                                "cicUserName": "String",
                                                "submittedUserId": "String",
                                                "isPaidTime": "Boolean"
                                            },
                                            "headers": [
                                                "ININ-ICWS-CSRF-Token",
                                                "Cookie"
                                            ],
                                            "template": [
                                                "sessionId",
                                                "timeOffRequestId"
                                            ],
                                            "query_params": []
                                        },
                                        "id": "icws-sessionId-wfm-time-off-timeOffRequestId-index-htm-put"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "title": "trade-requests",
                        "url": "icws/(sessionId)/wfm/trade-requests/index.htm#resource",
                        "id": "icws-sessionId-wfm-trade-requests-index-htm-resource",
                        "depth": 2,
                        "type": "resource",
                        "children": [
                            {
                                "title": "POST",
                                "url": "icws/(sessionId)/wfm/trade-requests/index.htm#post",
                                "type": "post-method",
                                "depth": 3,
                                "data": {
                                    "body": {
                                        "endTimeOfferedUtc": "DateTime",
                                        "minStartTimeGivenUtc": "DateTime",
                                        "minEndTimeGivenUtc": "DateTime",
                                        "requestState": {
                                            "All": "15015",
                                            "UnMatched": "3",
                                            "Canceled": "11",
                                            "Denied": "7",
                                            "Expired": "13",
                                            "Matched": "5"
                                        },
                                        "maxStartTimeGivenUtc": "DateTime",
                                        "startTimeAcceptedUtc": "DateTime",
                                        "maxEndTimeGivenUtc": "DateTime",
                                        "requestExpirationUtc": "DateTime",
                                        "canCancelTradeRequest": "Boolean",
                                        "endTimeAcceptedUtc": "DateTime",
                                        "acceptableTimesToTake": {
                                            "earliestStartUtc": "DateTime",
                                            "latestStartUtc": "DateTime"
                                        },
                                        "canEditTradeRequest": "Boolean",
                                        "matchState": {
                                            "All": "15015",
                                            "PendingForAdminReview": "3",
                                            "Canceled": "11",
                                            "Denied": "7",
                                            "Expired": "13",
                                            "Approved": "5"
                                        },
                                        "startTimeOfferedUtc": "DateTime",
                                        "shiftTradeRequestId": "String"
                                    },
                                    "headers": [
                                        "ININ-ICWS-CSRF-Token",
                                        "Cookie"
                                    ],
                                    "template": [
                                        "sessionId"
                                    ],
                                    "query_params": []
                                },
                                "id": "icws-sessionId-wfm-trade-requests-index-htm-post"
                            },
                            {
                                "title": "{shiftTradeRequestId}",
                                "url": "icws/(sessionId)/wfm/trade-requests/(shiftTradeRequestId)/index.htm#resource",
                                "id": "icws-sessionId-wfm-trade-requests-shiftTradeRequestId-index-htm-resource",
                                "depth": 3,
                                "type": "resource",
                                "children": [
                                    {
                                        "title": "PUT",
                                        "url": "icws/(sessionId)/wfm/trade-requests/(shiftTradeRequestId)/index.htm#put",
                                        "type": "put-method",
                                        "depth": 4,
                                        "data": {
                                            "body": {
                                                "endTimeOfferedUtc": "DateTime",
                                                "minStartTimeGivenUtc": "DateTime",
                                                "minEndTimeGivenUtc": "DateTime",
                                                "requestState": {
                                                    "All": "15015",
                                                    "UnMatched": "3",
                                                    "Canceled": "11",
                                                    "Denied": "7",
                                                    "Expired": "13",
                                                    "Matched": "5"
                                                },
                                                "maxStartTimeGivenUtc": "DateTime",
                                                "startTimeAcceptedUtc": "DateTime",
                                                "maxEndTimeGivenUtc": "DateTime",
                                                "requestExpirationUtc": "DateTime",
                                                "canCancelTradeRequest": "Boolean",
                                                "endTimeAcceptedUtc": "DateTime",
                                                "acceptableTimesToTake": {
                                                    "earliestStartUtc": "DateTime",
                                                    "latestStartUtc": "DateTime"
                                                },
                                                "canEditTradeRequest": "Boolean",
                                                "matchState": {
                                                    "All": "15015",
                                                    "PendingForAdminReview": "3",
                                                    "Canceled": "11",
                                                    "Denied": "7",
                                                    "Expired": "13",
                                                    "Approved": "5"
                                                },
                                                "startTimeOfferedUtc": "DateTime",
                                                "shiftTradeRequestId": "String"
                                            },
                                            "headers": [
                                                "ININ-ICWS-CSRF-Token",
                                                "Cookie"
                                            ],
                                            "template": [
                                                "sessionId",
                                                "shiftTradeRequestId"
                                            ],
                                            "query_params": []
                                        },
                                        "id": "icws-sessionId-wfm-trade-requests-shiftTradeRequestId-index-htm-put"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "title": "trade-matches/{shiftTradeMatchId}",
                        "url": "icws/(sessionId)/wfm/trade-matches/(shiftTradeMatchId)/index.htm#resource",
                        "id": "icws-sessionId-wfm-trade-matches-shiftTradeMatchId-index-htm-resource",
                        "depth": 2,
                        "type": "resource",
                        "children": [
                            {
                                "title": "PUT",
                                "url": "icws/(sessionId)/wfm/trade-matches/(shiftTradeMatchId)/index.htm#put",
                                "type": "put-method",
                                "depth": 3,
                                "data": {
                                    "body": {
                                        "endTimeOfferedUtc": "DateTime",
                                        "canCancelTradeMatch": "Boolean",
                                        "startTimeAcceptedUtc": "DateTime",
                                        "endTimeAcceptedUtc": "DateTime",
                                        "shiftTradeMatchId": "String",
                                        "matchState": {
                                            "All": "15015",
                                            "PendingForAdminReview": "3",
                                            "Canceled": "11",
                                            "Denied": "7",
                                            "Expired": "13",
                                            "Approved": "5"
                                        },
                                        "startTimeOfferedUtc": "DateTime"
                                    },
                                    "headers": [
                                        "ININ-ICWS-CSRF-Token",
                                        "Cookie"
                                    ],
                                    "template": [
                                        "sessionId",
                                        "shiftTradeMatchId"
                                    ],
                                    "query_params": []
                                },
                                "id": "icws-sessionId-wfm-trade-matches-shiftTradeMatchId-index-htm-put"
                            }
                        ]
                    },
                    {
                        "title": "data",
                        "url": "icws/(sessionId)/wfm/data/index.htm#resource",
                        "id": "icws-sessionId-wfm-data-index-htm-resource",
                        "depth": 2,
                        "type": "resource",
                        "children": [
                            {
                                "title": "GET",
                                "url": "icws/(sessionId)/wfm/data/index.htm#get",
                                "type": "get-method",
                                "depth": 3,
                                "data": {
                                    "body": {},
                                    "headers": [
                                        "ININ-ICWS-CSRF-Token",
                                        "Cookie"
                                    ],
                                    "template": [
                                        "sessionId"
                                    ],
                                    "query_params": [
                                        "select",
                                        "startUtc",
                                        "endUtc"
                                    ]
                                },
                                "id": "icws-sessionId-wfm-data-index-htm-get"
                            }
                        ]
                    },
                    {
                        "title": "matching-tradecounts",
                        "url": "icws/(sessionId)/wfm/matching-tradecounts/index.htm#resource",
                        "id": "icws-sessionId-wfm-matching-tradecounts-index-htm-resource",
                        "depth": 2,
                        "type": "resource",
                        "children": [
                            {
                                "title": "GET",
                                "url": "icws/(sessionId)/wfm/matching-tradecounts/index.htm#get",
                                "type": "get-method",
                                "depth": 3,
                                "data": {
                                    "body": {},
                                    "headers": [
                                        "ININ-ICWS-CSRF-Token",
                                        "Cookie"
                                    ],
                                    "template": [
                                        "sessionId"
                                    ],
                                    "query_params": [
                                        "startUtc",
                                        "endUtc",
                                        "namedScheduleID",
                                        "startTimes"
                                    ]
                                },
                                "id": "icws-sessionId-wfm-matching-tradecounts-index-htm-get"
                            }
                        ]
                    },
                    {
                        "title": "matching-tradeinfo",
                        "url": "icws/(sessionId)/wfm/matching-tradeinfo/index.htm#resource",
                        "id": "icws-sessionId-wfm-matching-tradeinfo-index-htm-resource",
                        "depth": 2,
                        "type": "resource",
                        "children": [
                            {
                                "title": "GET",
                                "url": "icws/(sessionId)/wfm/matching-tradeinfo/index.htm#get",
                                "type": "get-method",
                                "depth": 3,
                                "data": {
                                    "body": {},
                                    "headers": [
                                        "ININ-ICWS-CSRF-Token",
                                        "Cookie"
                                    ],
                                    "template": [
                                        "sessionId"
                                    ],
                                    "query_params": [
                                        "startUtc",
                                        "endUtc",
                                        "namedScheduleID",
                                        "startTimes"
                                    ]
                                },
                                "id": "icws-sessionId-wfm-matching-tradeinfo-index-htm-get"
                            }
                        ]
                    },
                    {
                        "title": "perform-trade",
                        "url": "icws/(sessionId)/wfm/perform-trade/index.htm#resource",
                        "id": "icws-sessionId-wfm-perform-trade-index-htm-resource",
                        "depth": 2,
                        "type": "resource",
                        "children": [
                            {
                                "title": "POST",
                                "url": "icws/(sessionId)/wfm/perform-trade/index.htm#post",
                                "type": "post-method",
                                "depth": 3,
                                "data": {
                                    "body": {
                                        "timeGainedStartUTC": "DateTime",
                                        "timeGainedEndUTC": "DateTime",
                                        "timeTradedAwayStartUTC": "DateTime",
                                        "timeTradedAwayEndUTC": "DateTime",
                                        "namedScheduleID": "String"
                                    },
                                    "headers": [
                                        "ININ-ICWS-CSRF-Token",
                                        "Cookie"
                                    ],
                                    "template": [
                                        "sessionId"
                                    ],
                                    "query_params": []
                                },
                                "id": "icws-sessionId-wfm-perform-trade-index-htm-post"
                            }
                        ]
                    },
                    {
                        "title": "scheduledatesrange",
                        "url": "icws/(sessionId)/wfm/scheduledatesrange/index.htm#resource",
                        "id": "icws-sessionId-wfm-scheduledatesrange-index-htm-resource",
                        "depth": 2,
                        "type": "resource",
                        "children": [
                            {
                                "title": "GET",
                                "url": "icws/(sessionId)/wfm/scheduledatesrange/index.htm#get",
                                "type": "get-method",
                                "depth": 3,
                                "data": {
                                    "body": {},
                                    "headers": [
                                        "ININ-ICWS-CSRF-Token",
                                        "Cookie"
                                    ],
                                    "template": [
                                        "sessionId"
                                    ],
                                    "query_params": [
                                        "dateUTC"
                                    ]
                                },
                                "id": "icws-sessionId-wfm-scheduledatesrange-index-htm-get"
                            }
                        ]
                    }
                ]
            }
        ]
    }];
}