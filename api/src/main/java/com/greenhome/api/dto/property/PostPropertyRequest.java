package com.greenhome.api.dto.property;

import com.greenhome.api.enums.PropertyStatusEnum;
import com.greenhome.api.enums.PropertyTypeEnum;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record PostPropertyRequest(
        @NotNull @NotBlank(message = "Nome deve ser preenchido")
        String name,
        @NotNull @NotBlank(message = "Endereço deve ser preenchido")
        String address,
        @NotNull @NotBlank(message = "Descrição deve ser preenchida")
        String description,
        @NotNull(message = "Latitude deve ser preenchida")
        double latitude,
        @NotNull(message = "Longitude deve ser preenchida")
        double longitude,
        @NotNull(message = "Tipo de propriedade deve ser preenchido")
        PropertyTypeEnum type,
        @NotNull(message = "Status de propriedade deve ser preenchido")
        PropertyStatusEnum status,
        @NotNull(message = "Progresso de terraplanagem deve ser preenchido")
        short landingProgress,
        @NotNull(message = "Progresso de fundação deve ser preenchido")
        short foundationProgress,
        @NotNull(message = "Progresso de estrutura deve ser preenchido")
        short structureProgress,
        @NotNull(message = "Progresso de alvenaria deve ser preenchido")
        short masonryProgress,
        @NotNull(message = "Progresso de elétrica deve ser preenchido")
        short eletricProgress,
        @NotNull(message = "Progresso de hidráulica deve ser preenchido")
        short hydraulicProgress,
        @NotNull(message = "Progresso de acabamento deve ser preenchido")
        short finishingProgress,
        boolean gym,
        boolean entranceHall,
        boolean splitACWaiting,
        boolean centralGas,
        boolean intercom,
        boolean eletronicGate,
        boolean elevator,
        boolean bicycleStand,
        boolean partyHall,
        boolean playground
) {
}
