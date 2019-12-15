package com.cpe.springboot.Controller;

import com.cpe.springboot.Dto.EnveloppeDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
public class MessageHistoryEntry<T> {
    @Getter
    @Setter
    private EnveloppeDto enveloppeDto;

    @Getter
    @Setter
    private T context;
}
