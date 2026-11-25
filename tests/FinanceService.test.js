import { describe, it, expect } from 'vitest';
import { financeserviceOp0, runFinanceServicePipeline } from '../src/services/FinanceService.js';

describe('FinanceService', () => {
  it('processes line items and runs sequential pipeline', async () => {
    const op = await financeserviceOp0({ items: [{ qty: 2, rate: 15 }] });
    expect(op.success).toBe(true);
    const pipe = await runFinanceServicePipeline([{ items: [{ qty: 1, rate: 20 }] }], {});
    expect(pipe.log).toHaveLength(1);
    expect(pipe.log[0].success).toBe(true);
  });
});
