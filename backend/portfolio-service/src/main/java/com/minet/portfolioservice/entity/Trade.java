package com.minet.portfolioservice.entity;


import com.minet.portfolioservice.enums.TradeStatus;
import com.minet.portfolioservice.enums.TransactionStatus;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name="trade")
public class Trade {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Integer id;

    @Column(name="date")
   private LocalDateTime date;

    @Column(name="supplier")
    private String supplier;


    @Enumerated(EnumType.STRING)
    @Column(name = "status")
    private TradeStatus status;

    @Column(name = "quantity")
    private Double quantity;

    @Column(name = "value")
    private Double value;

    @Column(name = "coin_id")
    private Integer coinId;

    @Column(name = "delivery_fee")
    private Double deliveryFee;

    @Column(name = "deposited_to")
    private String depositedTo;

    @Column(name = "transaction_fee")
    private Double transactionFee;

    @Column(name = "total_amount")
    private Double totalAmount;

    @Column(name = "payment_method")
    private String paymentMethod;

    @Column(name = "user_id")
    private Integer userId;

    @Enumerated(EnumType.STRING)
    @Column(name = "transaction_status")
    private TransactionStatus transactionStatus;

}
