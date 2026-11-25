import { describe, it, expect } from 'vitest';
import { auditserviceOp0, runAuditServicePipeline } from '../src/services/AuditService.js';

describe('AuditService', () => {
  it('processes line items and runs sequential pipeline', async () => {
    const op = await auditserviceOp0({ items: [{ qty: 2, rate: 15 }] });
    expect(op.success).toBe(true);
    const pipe = await runAuditServicePipeline([{ items: [{ qty: 1, rate: 20 }] }], {});
    expect(pipe.log).toHaveLength(1);
    expect(pipe.log[0].success).toBe(true);
  });
});
