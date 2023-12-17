interface IPrference {
    "additional_info": string,
    "auto_return": string,
    "back_urls": {
        "failure": string,
        "pending": string,
        "success": string
    },
    "binary_mode": boolean,
    "client_id": string,
    "collector_id": number,
    "coupon_code": null,
    "coupon_labels": null,
    "date_created": string
    "date_of_expiration": null,
    "expiration_date_from": null,
    "expiration_date_to": null,
    "expires": boolean,
    "external_reference": string,
    "id": string,
    "init_point": string,
    "internal_metadata": null,
    "items": [
        {
            "id": string,
            "category_id": string,
            "currency_id": string,
            "description": string,
            "title": string,
            "quantity": number,
            "unit_price": number
        }
    ],
    "marketplace": string,
    "marketplace_fee": number,
    "metadata": {},
    "notification_url": null,
    "operation_type": string,
    "payer": {
        "phone": {
            "area_code": string,
            "number": string
        },
        "address": {
            "zip_code": string,
            "street_name": string,
            "street_number": null
        },
        "email": string,
        "identification": {
            "number": string,
            "type": string
        },
        "name": string,
        "surname": string,
        "date_created": null,
        "last_purchase": null
    },
    "payment_methods": {
        "default_card_id": null,
        "default_payment_method_id": null,
        "excluded_payment_methods": [
            {
                "id": string
            }
        ],
        "excluded_payment_types": [
            {
                "id": string
            }
        ],
        "installments": null,
        "default_installments": null
    },
    "processing_modes": null,
    "product_id": null,
    "redirect_urls": {
        "failure": string,
        "pending": string,
        "success": string
    },
    "sandbox_init_point": string,
    "site_id": string,
    "shipments": {
        "default_shipping_method": null,
        "receiver_address": {
            "zip_code": string,
            "street_name": string,
            "street_number": null,
            "floor": string,
            "apartment": string,
            "city_name": null,
            "state_name": null,     
            "country_name": null
        }
    },
    "total_amount": null,
    "last_updated": null
}